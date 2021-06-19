export class Fields {
    name: string;
    label: string;
    required: boolean;
    order: number;
    type: string;
    description: string;
    options: { key: string, value: string }[];

    constructor(field: {
        name?: string;
        label?: string;
        required?: boolean;
        order?: number;
        type?: string;
        description?: string;
        options?: { key: string, value: string }[];
    } = {}) {
        this.name = field.name || '';
        this.label = field.label || '';
        this.required = !!field.required;
        this.order = field.order === undefined ? 1 : field.order;
        this.type = field.type || '';
        this.description = field.description || '';
        this.options = field.options || [];
    }
}
