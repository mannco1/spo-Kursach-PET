const { Perfomance } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class PerfomanceController {
    async create(req, res, next) {
        try {  
            let { title, composer,description } = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const perfomance = await Perfomance.create({ title, composer,description,img: fileName });
            return res.json(perfomance);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании выступления'));
        }
    } 

    async getAll(req, res, next) {
        try {  
            const perfomances = await Perfomance.findAll();  
            return res.json(perfomances);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка выступлений'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const perfomance = await Perfomance.findByPk(id);
            if (!perfomance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            return res.json(perfomance);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении выступления'));
        }
    }

    async  update(req, res, next) {
        const { id } = req.params;
        const { title, composer } = req.body;
        try {
            let perfomance = await Perfomance.findByPk(id);
            if (!perfomance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            
            // Проверяем, есть ли загруженное изображение
            if (req.file) {
                // Если есть, то сохраняем его и обновляем путь в базе данных
                const { image } = req.file;
                const fileName = uuid.v4() + ".jpg";
                await fs.rename(image.path, path.resolve(__dirname, '..', 'static', fileName));
                perfomance.image = fileName;
            } 
    
            // Обновляем остальные поля выступления
            perfomance.title = title;
            perfomance.composer = composer;
            await perfomance.save();
            
            // Возвращаем обновленное выступление
            return res.json(perfomance);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении выступления'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Perfomance.destroy({ where: { id } });
            return res.json({ message: 'Выступление успешно удалено' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении выступления'));
        }
    }
}

module.exports = new PerfomanceController();
