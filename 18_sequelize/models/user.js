//user테이블 정의
const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User", //시퀄라이즈에서 사용하는 이름
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "newlogin",
      freezeTableName: true,
      timestamps: false,
      //freezeTableName: true로 설정하면 이름을 복수로 설정하지 않는다.
      //timestamps: 기본적인 설정은 true
    }
  );
};

module.exports = User;
