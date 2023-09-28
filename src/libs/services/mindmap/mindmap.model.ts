export interface IBlock {
  title: string;
  type: string;
  status: string;
  listBlocks?: IBlock[];
}
