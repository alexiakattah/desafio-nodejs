export default class Tasks {
  constructor(
    public title: string,
    public description: string,
    public members: string[],
    public tags: string[],
    public projectId: string,
    public status: Status,
    public id?: string
  ) {}
}

export enum Status {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}
