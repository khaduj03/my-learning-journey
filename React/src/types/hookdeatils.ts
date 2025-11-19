export interface HookSection {
  title: string;
  content?: string;
  example?:string;
  list?: string[];
  code?: string;
}

export interface HookInfo {
  title: string;
  sections: HookSection[];
  example: string;
}
