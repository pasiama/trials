
export type Task = {
    id: number;
    title: string;
    description: string;
    duedate: string;
    priority: number;
    completed: boolean;   //theres a question mark between the completed and boolean
  };

  // export type Date= string;

export type User = {
  id: number;
  Fullname : string;
   Email : string;
   Password : string;
}

export type Profile = {
  id: number;
  Fullname : string;
   Email : string;
   Phone : number;
   Address : string
   Password : string;
}