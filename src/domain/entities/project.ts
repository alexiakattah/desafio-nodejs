class Project {
  constructor(
    public name: string,
    public description: string,
    public members: string[],
    public id?: string
  ) {}
}

export default Project;
