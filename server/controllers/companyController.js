const { Company } = require('../models/models');
const ApiError = require('../error/ApiError');

class CompanyController {
    async create(req, res, next) {
        const { name, address } = req.body;
        try {
            const company = await Company.create({ name, address });
            return res.json(company);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании компании'));
        }
    }

    async getAll(req, res, next) {
        try {
            const companies = await Company.findAll();
            return res.json(companies);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка компаний'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const company = await Company.findByPk(id);
            if (!company) {
                return next(ApiError.notFound('Компания не найдена'));
            }
            return res.json(company);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении компании'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name, address } = req.body;
        try {
            const company = await Company.findByPk(id);
            if (!company) {
                return next(ApiError.notFound('Компания не найдена'));
            }
            company.name = name;
            company.address = address;
            await company.save();
            return res.json(company);
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении компании'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Company.destroy({ where: { id } });
            return res.json({ message: 'Компания успешно удалена' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении компании'));
        }
    }
}

module.exports = new CompanyController();
