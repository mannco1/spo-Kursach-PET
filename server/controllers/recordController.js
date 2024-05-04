const { Record } = require('../models/models');
const ApiError = require('../error/ApiError');


class RecordController {
    async create(req, res, next) {

        try {
            const { stickerNumber, releaseDate, wholesalePrice, retailPrice } = req.body;
            
            const record = await Record.create({ stickerNumber, releaseDate, wholesalePrice, retailPrice });




            
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании компании'));
        }
    }

    async getAll(req, res, next) {

        try {
            const records = await Record.findAll();
            return res.json(records);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка компаний'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const record = await Record.findByPk(id);
            if (!record) {
                return next(ApiError.notFound('Компания не найдена'));
            }
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении компании'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { stickerNumber, releaseDate, wholesalePrice, retailPrice } = req.body;
        try {
            let record = await Record.findByPk(id);
            if (!record) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }

            // Обновляем поля ансамбля
            record = await Record.update({ stickerNumber, releaseDate, wholesalePrice, retailPrice });

            // Возвращаем обновленный ансамбль
            return res.json(record);
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении ансамбля'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await record.destroy({ where: { id } });
            return res.json({ message: 'Компания успешно удалена' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении компании'));
        }
    }
}

module.exports = new RecordController();
