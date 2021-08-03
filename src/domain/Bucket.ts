import {PrimaryKey, Entity, Collection, OneToMany} from "@mikro-orm/core"
import {Folder} from './Folder';
import {v4} from "uuid";

@Entity()
export class Bucket {
  @PrimaryKey()
  id: string = v4();

  @OneToMany(() => Folder, folder => folder.bucket)
  folders = new Collection<Folder>(this);
}
