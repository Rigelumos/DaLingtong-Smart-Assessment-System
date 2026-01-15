import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (
    loginUser: API.LoginUserVO,
     needAccess = ACCESS_ENUM.NOT_LOGIN
    ) => {
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
    if (needAccess === ACCESS_ENUM.NOT_LOGIN){
        return true;
    }
    // 如果要用户登录才能访问
    if (needAccess === ACCESS_ENUM.USER){
        if(loginUserAccess === ACCESS_ENUM.NOT_LOGIN){
            return false;
        }
    }
    // 如果要管理员才能访问
    if (needAccess === ACCESS_ENUM.ADMIN){
        if(loginUserAccess !== ACCESS_ENUM.ADMIN){
            return false;
        }
    }
    return true;
};

export default checkAccess;