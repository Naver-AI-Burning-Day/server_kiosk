module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name:{
            type: DataTypes.STRING(5),
            allowNULL: false,
            unique: false,
        },
    }, {
        timestamp: false,
        paranoid: true,
        underscored: true,
    });
};

// user 테이블 정리
// 이름(5), 아이디(30), 비밀번호(20), 나이(2), 휴대폰 번호(12), 계정생성일(DATE->default(now)), 마켓 이름(20)