const Category = ({ img, name, portion, calories }) => {
    return (
        <div className="general__two">
            {/* <div className="cat__one">
                <div className="name">
               
                </div>
                <div className="gramm">
               
                </div>
                <div className="bju">
                
                </div>
                <div className="add">
            
                </div>
            </div> */}
            <div className="cat__two">
                <img src={img} alt="" />
                <div className="about">
                    <div className="name">
                    {/* Салат “Тропический” */} {name}
                    </div>
                    <div className="gramm">
                    {/* 300 грамм - 1 порция */} {portion}
                    </div>
                    <div className="bju">
                    {/* 36 - белков, 11 - жиров, 55 - углеводов */} {calories}
                    </div>
                    <div className="add">
                    Добавить в корзину
                    </div>
                </div>
            </div>
            {/* <div className="cat__three">
                <div className="about">
                    <div className="name">
                    Салат “Японка”
                    </div>
                    <div className="gramm">
                    300 грамм - 1 порция
                    </div>
                    <div className="bju">
                    36 - белков, 11 - жиров, 55 - углеводов
                    </div>
                    <div className="add">
                    Добавить в корзину
                    </div>
                </div>
            </div>
            <div className="cat__four">
               <div className="about">
                    <div className="name">
                    Салат “Собери Сам”
                    </div>
                    <div className="gramm">
                    300 грамм - 1 порция
                    </div>
                    <div className="bju">
                    36 - белков, 11 - жиров, 55 - углеводов
                    </div>
                    <div className="add">
                    Добавить в корзину
                    </div>
               </div>
            </div>
            <div className="cat__five">
                <div className="about">
                    <div className="name">
                    Салат “Цезарь”
                    </div>
                    <div className="gramm">
                    300 грамм - 1 порция
                    </div>
                    <div className="bju">
                    36 - белков, 11 - жиров, 55 - углеводов
                    </div>
                    <div className="add">
                    Добавить в корзину
                    </div>
                </div>
            </div>
            <div className="cat__six">
                <div className="about">
                    <div className="name">
                    Салат “Оливье”
                    </div>
                    <div className="gramm">
                    300 грамм - 1 порция    
                    </div>
                    <div className="bju">
                    36 - белков, 11 - жиров, 55 - углеводов
                    </div>
                    <div className="add">
                    Добавить в корзину
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Category;