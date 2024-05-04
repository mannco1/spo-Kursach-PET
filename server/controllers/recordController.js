const { Record } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');

class RecordController {
    async create(req, res, next) {
 
        try {
            let { stickerNumber, releaseDate, wholesalePrice, retailPrice } = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const record = await Record.create({ stickerNumber, releaseDate, wholesalePrice, retailPrice,img: fileName });

 


            
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
        const { stickerNumber, releaseDate, wholesalePrice, retailPrice,  fileName } = req.body;
        try {
            let record = await Record.findByPk(id);
            if (!record) { 
                return next(ApiError.notFound('Ансамбль не найден'));
            }
  
            // Обновляем поля ансамбля
            record = await Record.update({ stickerNumber, releaseDate, wholesalePrice, retailPrice,img: fileName });

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
