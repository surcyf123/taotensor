import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Difficulty {
    constructor(props?: Partial<Difficulty>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNum!: number

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Index_()
    @Column_("int4", {nullable: false})
    netuid!: number
}
