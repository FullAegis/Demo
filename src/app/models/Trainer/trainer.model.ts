import {WorkingStatus} from './trainer.working-status.model.ts';

export interface Trainer {
  id: number
  firstname: string
  lastname: string

  avatar: string

  birthdate?: Date /// aka `birthdate: Date | null`
  status: WorkingStatus
}
