/**
 * 封装 localStorage
 * Object 自动 JSON 转换，保证数据类型一致，通过 prefix，降低 key 冲突
 * 可选： 设置存储有效期
 * Author: xunmi
 * Date: 2018-12-26 16:50:00
 */
class Db {
    constructor (prefix) {
        if (Object.prototype.toString.call(window.localStorage) !== '[object Storage]') {
            throw new TypeError('当前运行环境不支持 localStorage');
        }
        [this._localStorage, this._prefix, this._keys] = [window.localStorage, prefix, new Set()];
        this.initKeys();
    }

    initKeys () {
        Object.keys(this._localStorage).forEach(key => {
            // 或者使用正则从**首位**判断
            if (key.slice(0, this._prefix.length) === this._prefix) {
                this._keys.add(key);
            }
        });
    }

    toFullKey (key) {
        if (key.slice(0, this._prefix.length) === this._prefix) {
            return key;
        }
        return `${ this._prefix }-${ key }`;
    }

    /**
     * 添加数据
     * @param key 键名，在内部会转换
     * @param value 键值
     * @param expires 有效期，可选
     */
    set (key, value, expires) {
        key = this.toFullKey(key);
        const data = { value };
        if (typeof expires === 'number') {
            data.time = Date.now();
            data.expires = expires;
        }
        this._localStorage.setItem(key, JSON.stringify(data));
        this._keys.add(key);
    }

    /**
     * 访问数据
     * @param key 键名
     * @param defaultValue 默认值
     * @returns {*} 键值，若过期，则自动删除，返回默认值
     */
    get (key, defaultValue) {
        key = this.toFullKey(key);
        if (this._keys.has(key)) {
            const data = JSON.parse(this._localStorage.getItem(key) || '{}');
            if (data && data.value !== undefined) {
                if (data.time) {
                    const valid = (Date.now() - data.time) < data.expires;
                    if (valid) {
                        return data.value;
                    }
                    this.remove(key);
                }
                return data.value;
            }
        }
        return defaultValue;
    }

    has (key) {
        key = this.toFullKey(key);
        return this._keys.has(key);
    }

    remove (key) {
        key = this.toFullKey(key);
        if (this._keys.has(key)) {
            this._localStorage.removeItem(key);
            return this._keys.delete(key);
        }
        return false;
    }

    clear () {
        this._keys.forEach(key => this.remove(key));
    }

    // 这里没有判断 prefix，如果需要其他 prefix，直接 new Db(prefix);
    // 不推荐一个系统中存在多个不同的 prefix
    static getSingle (prefix) {
        if (!this.single) {
            this.single = new Db(prefix);
        }
        return this.single;
    }
}

export default Db;
