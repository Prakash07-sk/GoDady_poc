
export const ROOT_PATH : string = '/goddy'

const path = (root: string, sublink: string) => {
    return `${root}${sublink}`;
  };


export const APP_PATH  = {
    repository : path(ROOT_PATH, '/repo')
}