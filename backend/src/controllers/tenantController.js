const { Tenant, AuditLog } = require('../models');

exports.getTenant = async (req, res) => {
  try {
    if (req.user.role !== 'super_admin' && req.user.tenantId !== req.params.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    const tenant = await Tenant.findByPk(req.params.id);
    if (!tenant) return res.status(404).json({ success: false, message: 'Tenant not found' });

    res.json({ success: true, data: tenant });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.listTenants = async (req, res) => {
  try {
    if (req.user.role !== 'super_admin') {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }
    const tenants = await Tenant.findAll();
    res.json({ success: true, data: tenants });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTenant = async (req, res) => {
  try {
    const { name, status, subscriptionPlan, maxUsers, maxProjects } = req.body;
    const tenant = await Tenant.findByPk(req.params.id);

    if (!tenant) return res.status(404).json({ success: false, message: 'Tenant not found' });

    if (req.user.role === 'tenant_admin') {
      if (req.user.tenantId !== req.params.id) return res.status(403).json({ success: false, message: 'Unauthorized' });
      await tenant.update({ name });
    } else if (req.user.role === 'super_admin') {
      await tenant.update({ name, status, subscriptionPlan, maxUsers, maxProjects });
    } else {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    await AuditLog.create({
      action: 'UPDATE_TENANT',
      entityType: 'Tenant',
      entityId: tenant.id,
      tenantId: tenant.id,
      userId: req.user.id,
      details: req.body
    });

    res.json({ success: true, data: tenant });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};