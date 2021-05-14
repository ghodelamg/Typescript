interface IBase {
  id: number;
}
interface IBase2 {
  salary: number;
}

interface IDerivedFromIBase extends IBase {
  name: string;
}

class ClassIterfaceInheritance implements IDerivedFromIBase, IBase2 {
  public id: number;
  public name: string;
  public salary: number;
}

class ClassIterfaceInheritance2 implements IBase {
  id: number;
}

class DerivedClassIterfaceInheritance2 extends ClassIterfaceInheritance2 implements IDerivedFromIBase {
  name: string;
}