export const getCreatePage = (path) => `${path}/create`;
export const getCreateByIdPage = (path) => `${path}/:id/create`;
export const getUpdatePage = (path) => `${path}/:id/update`;
export const getViewPage = (path) => `${path}/:id/view`;

export const generateCreate = ({ path, entity }) => `${path}/create${entity && `-${entity}`}`;
export const generateManage = ({ path, entity }) => `${path}/manage${entity && `-${entity}`}`;
export const generateView = ({ path, entity }) => `${path}/view${entity && `-${entity}`}/:id`;
export const generateUpdate = ({ path, entity }) => `${path}/update${entity && `-${entity}`}/:id`;
export const generateDelete = ({ path, entity }) => `${path}/delete${entity && `-${entity}`}/:id`;
export const generatePrintPage = ({ path, entity }) => `${path}/print${entity && `-${entity}`}/:id`;
export const generateCreateById = ({ path }) => `${path}/:id/create`;
