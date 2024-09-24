import React from 'react'
import './main.css'
import { about } from '../../src/assets/image'
import { works } from '../../src/assets/image'

const Main = () => {
  return (
    <main className='main'>
        <section className='about'>
            <div className="container about__container">
                <h2 className="about__title">Обо мне</h2>
                    <div className="about__content">
                    <img src={about} alt="" className="about__img" />
                    <div className="about__text">
                    <h2 className="about__name">Зубенко Михаил Петрович</h2>
                    <p className="about__desc">Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='works'>
            <div className="container works__container">
            <h2 className="works__title">Мои работы</h2>
            <div className="works__cards">
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            <div className="card">
                <img src={works} alt="" className='card__img' />
                <h3 className="card__title">Чиланзар</h3>
                <p className="card__desc">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                <a href="" className="card__link">Посмотреть</a>
            </div>
            </div>
            </div>
        </section>
    </main>
  )
}

export default Main