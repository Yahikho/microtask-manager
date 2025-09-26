import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TaskState {
    PORHACER = "POR HACER",
    ENPROGRESO = "EN PROGRESO",
    COMPLETADA = "COMPLETADA",
}

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    description?: string

    @Column()
    deadline: Date

    @Column({ type: "enum", enum: TaskState, default: TaskState.PORHACER })
    status: TaskState

    @Column({ nullable: false })
    user: string

    @Column({ default: true })
    isActive: boolean

    @Column({ nullable: true })
    updated_at?: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date
}