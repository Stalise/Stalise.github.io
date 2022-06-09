export const sagasConstants = {
   SAGA_CHECK_AUTH: "SAGA_CHECK_AUTH",
   SAGA_AUTH_USER: "SAGA_AUTH_USER",
   SAGA_REG_USER: "SAGA_REG_USER",
   SAGA_LOGOUT_USER: "SAGA_LOGOUT_USER",
   SAGA_GET_USER_DATA: "SAGA_GET_USER_DATA",
   SAGA_GET_USER_POSTS: "SAGA_GET_USER_POSTS",
   SAGA_CREATE_POST: "SAGA_CREATE_POST",
};

export const sagaActionCreator = <T>(type: string, payload?: T): { type: string, payload?: T } => {
   return { type, payload };
};