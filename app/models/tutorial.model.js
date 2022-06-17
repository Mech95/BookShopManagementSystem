module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("bookDetails", {
  
    Book: {
      type: Sequelize.STRING
    },
    Author: {
      type: Sequelize.STRING
    },
    publisher: {
      type: Sequelize.STRING    },

      Mrp:{ 
        type: Sequelize.STRING
      },
      

  },{ timestamps: false });

  return Tutorial;
};
