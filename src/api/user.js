import service from '@/libs/service';

export function login (data, cancelToken) {
    if (data.userName && data.password) {
        return service.request({
            url: 'login',
            data: {
                username: data.userName,
                password: data.password
            },
            method: 'post',
            cancelToken
        });
    } else {
        return Promise.reject('missing parameter');
    }
}

/**
 * 账号退出
 */
export function logout () {
    return Promise.resolve({ msg: '已退出' });
}

export function getPermissions (data) {
    if (data.userId) {
        return service.request({
            url: 'getPermissions',
            params: data
        });
    } else {
        return Promise.reject('missing parameter');
    }
}
