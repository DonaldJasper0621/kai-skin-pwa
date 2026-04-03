export interface RoutineStep {
  action: string;
  product?: string;
  note?: string;
}

export interface SkincarePlan {
  id?: string;
  morning: RoutineStep[];
  night: RoutineStep[];
  tips?: string;
  createdAt?: string;
}

export interface StoredPlan extends SkincarePlan {
  id: string;
  createdAt: string;
}
