//visitor테이블 정의

const visitor = function (Sequlize, DataTypes) {
  const model = Sequlize.define(
    "visitor", //모델이름
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //not null
        primaryKey: true,
        autorIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataType.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", //실제 db테이블
      freezeTableName: true,
      timeStamps: false,
    }
  );
  return model;
};
module.exports = visitor;
