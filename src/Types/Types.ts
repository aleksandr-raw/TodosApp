export type Tab = 'All' | 'Completed' | 'Active';

export type Task = {
    description: string;
    completed: boolean;
    id: number;
};
