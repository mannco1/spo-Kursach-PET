const { Record } = require('../models/models');
const ApiError = require('../error/ApiError');

class RecordController {
    async create(req, res, next) {
        const { stickerNumber, releaseDate, wholesalePrice, retailPrice, quantitySoldLastYear, quantitySoldThisYear, remainingStock, companyId } = req.body;
        try {
            const record = await Record.create({ stickerNumber, releaseDate, wholesalePrice, retailPrice, quantitySoldLastYear, quantitySoldThisYear, remainingStock, CompanyId: companyId });
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании пластинки'));
        }
    }

    async getAll(req, res, next) {
        try {
            const records = await Record.findAll();
            return res.json(records);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка пластинок'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const record = await Record.findByPk(id);
            if (!record) {
                return next(ApiError.notFound('Пластинка не найдена'));
            }
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении пластинки'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { stickerNumber, releaseDate, wholesalePrice, retailPrice, quantitySoldLastYear, quantitySoldThisYear, remainingStock, companyId } = req.body;
        try {
            const record = await Record.findByPk(id);
            if (!record) {
                return next(ApiError.notFound('Пластинка не найдена'));
            }
            record.stickerNumber = stickerNumber;
            record.releaseDate = releaseDate;
            record.wholesalePrice = wholesalePrice;
            record.retailPrice = retailPrice;
            record.quantitySoldLastYear = quantitySoldLastYear;
            record.quantitySoldThisYear = quantitySoldThisYear;
            record.remainingStock = remainingStock;
            record.CompanyId = companyId;
            await record.save();
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении пластинки'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Record.destroy({ where: { id } });
            return res.json({ message: 'Пластинка успешно удалена' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении пластинки'));
        }
    }
}

module.exports = new RecordController();
