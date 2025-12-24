require('dotenv').config();
const sequelize = require('../config/database');
const { Tenant, User, Project, Task, AuditLog } = require('../models');

const migrate = async () => {
  try {
    console.log('Starting Database Migration...');

    // 1. Authenticate to check connection
    await sequelize.authenticate();
    console.log('Database Connection Established.');

    // 2. Sync Database with ALTER to update schema without data loss
    await sequelize.sync({ alter: true });
    
    console.log('✅ Database Migration Completed Successfully (Schema Updated).');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration Failed:', error);
    process.exit(1);
  }
};

migrate();