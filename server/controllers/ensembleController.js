const { Ensemble } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');



class EnsembleController {
    async create(req, res, next) {
        try {
            const { name, leaderId } = req.body;
            if (!name || !leaderId) {
                return next(ApiError.badRequest('Отсутствуют обязательные поля: name и leaderId'));
            }

            if (!req.files || !req.files.img) {
                return next(ApiError.badRequest('Файл изображения не загружен'));
            }

            const { img } = req.files;
            const fileName = uuid.v4() + path.extname(img.name); 

            // Перемещение файла изображения в статическую директорию 
            const filePath = path.resolve(__dirname, '..', 'static', fileName);
            await img.mv(filePath);

            // Создание записи ансамбля 
            const ensemble = await Ensemble.create({
                name,
                leaderId,
                img: fileName
            });

            return res.json(ensemble);
        } catch (err) {
            console.error(err); // Вывод ошибки в консоль для отладки
            return next(ApiError.internal('Ошибка при создании ансамбля'));
        }
    } 
    
    async getAll(req, res, next) {
        try {
            const ensembles = await Ensemble.findAll();
            return res.json(ensembles);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка ансамблей'));
        }
    }
  
    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const ensemble = await Ensemble.findByPk(id);
            if (!ensemble) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            return res.json(ensemble);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении ансамбля'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            let ensemble = await Ensemble.findByPk(id);
            if (!ensemble) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            
            // Обновляем поля ансамбля
            ensemble = await ensemble.update({ name });
    
            // Возвращаем обновленный ансамбль
            return res.json(ensemble);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении ансамбля'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Ensemble.destroy({ where: { id } });
            return res.json({ message: 'Ансамбль успешно удален' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении ансамбля'));
        }
    }
}

module.exports = new EnsembleController();
