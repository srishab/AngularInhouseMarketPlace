import { Users } from "./users";

export class Employee {
    public empId: number;
     public empName: string;
     public deptName:string;
     public location:String;
     public user:Users=new Users();
}
