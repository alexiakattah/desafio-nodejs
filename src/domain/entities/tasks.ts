export default class Tasks {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public status: string,
    public project_id: string,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
