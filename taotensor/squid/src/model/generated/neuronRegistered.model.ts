import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Hotkey} from "./hotkey.model"

@Entity_()
export class NeuronRegistered {
    constructor(props?: Partial<NeuronRegistered>) {
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

    @Index_()
    @Column_("int4", {nullable: false})
    netuid!: number

    @Column_("int4", {nullable: false})
    uid!: number

    @Index_()
    @ManyToOne_(() => Hotkey, {nullable: true})
    hotkey!: Hotkey
}
