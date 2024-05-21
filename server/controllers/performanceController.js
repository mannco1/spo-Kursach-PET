const { Performance } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class PerformanceController {
        
    async create(req, res, next) {
        try {
            const { title, composer,description } = req.body;
           

            const { img } = req.files;
            const fileName = uuid.v4() + path.extname(img.name); 

            // Перемещение файла изображения в статическую директорию 
            const filePath = path.resolve(__dirname, '..', 'static', fileName);
            await img.mv(filePath);

            // Создание записи ансамбля 
            const performance = await Performance.create({
                title,  
                composer,
                description,
                img: fileName
            });

            return res.json(performance);
        } catch (err) {
            console.error(err); // Вывод ошибки в консоль для отладки
            return next(ApiError.internal('Ошибка при создании ансамбля'));
        }
    } 
    

    async getAll(req, res, next) {
        try {  
            const performances = await Performance.findAll();  
            return res.json(performances);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка выступлений'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const performance = await Performance.findByPk(id);
            if (!performance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            return res.json(performance);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении выступления'));
        }
    }

    async  update(req, res, next) {
        const { id } = req.params;
        const { title, composer } = req.body;
        try {
            let performance = await Performance.findByPk(id);
            if (!performance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            
            // Проверяем, есть ли загруженное изображение
            if (req.file) {
                // Если есть, то сохраняем его и обновляем путь в базе данных
                const { image } = req.file;
                const fileName = uuid.v4() + ".jpg";
                await fs.rename(image.path, path.resolve(__dirname, '..', 'static', fileName));
                performance.image = fileName;
            } 
    
            // Обновляем остальные поля выступления
            performance.title = title;
            performance.composer = composer;
            await performance.save();
            
            // Возвращаем обновленное выступление
            return res.json(performance);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении выступления'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Performance.destroy({ where: { id } });
            return res.json({ message: 'Выступление успешно удалено' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении выступления'));
        }
    }
}

module.exports = new PerformanceController();
 