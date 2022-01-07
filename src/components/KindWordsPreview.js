import React from 'react';
import {TiChevronRight} from "react-icons/ti"
import {TiChevronLeft} from "react-icons/ti"
import {TiArrowSortedDown} from "react-icons/ti"

const KindWordsPreview = () => {
    return (
        <div className="kindWordsPreview">
            <div className="kindWordsLayer">
                <h1>Kind Words From Happy Candidates</h1>
                <h4>What other people thought about the service provided by Jobify</h4>


                <div className="allCustomersAndIcons">
                    <div className="mainIconDiv">
                        <div className="iconLeft">
                            <TiChevronLeft/>
                        </div>
                    </div>

                    <div className="allCustomers">
                        <div className="oneCustomer grow1">
                            <div className="oneCustomerText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis delectus dignissimos doloribus, ducimus eum excepturi facilis hic impedit ipsum iste maxime modi molestiae odio officiis, pariatur placeat quisquam rem suscipit totam veniam veritatis voluptate.
                            </div>
                            <div className="oneCustomerIcon">
                                <TiArrowSortedDown/>
                            </div>
                            <img src="https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg" alt=""/>
                            <p>Customer #6</p>
                        </div>

                        <div className="oneCustomer grow1">
                            <div className="oneCustomerText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda, doloribus eius illo odio perferendis quae rem! A autem consequatur cumque dolores ducimus eligendi est et id in itaque libero, magnam maiores minima minus molestias nobis pariatur porro praesentium qui, reiciendis rem, sint sunt tempora temporibus tenetur velit veniam.
                            </div>
                            <div className="oneCustomerIcon">
                                <TiArrowSortedDown/>
                            </div>
                            <img src="data:image/jpeg;base64,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" alt=""/>
                            <p>Customer #7</p>
                        </div>

                        <div className="oneCustomer grow1">
                            <div className="oneCustomerText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum dicta distinctio et fuga hic in labore molestiae pariatur voluptas.
                            </div>
                            <div className="oneCustomerIcon">
                                <TiArrowSortedDown/>
                            </div>
                            <img src="https://420ms01dbvwg1ugtc53k31zj-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/harry-gardiner-koozai-480x480.jpg" alt=""/>
                            <p>Customer #1</p>
                        </div>

                        <div className="oneCustomer grow1">
                            <div className="oneCustomerText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam, aliquid debitis dignissimos, dolor dolorem eius et eum eveniet facere id iusto laudantium minima neque odio odit recusandae sed unde voluptas. Atque consectetur distinctio molestiae odio porro repellat repellendus.
                            </div>
                            <div className="oneCustomerIcon">
                                <TiArrowSortedDown/>
                            </div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkGHpKT4paJEpRfUhkH9SbBWNmKYZneIKgw&usqp=CAU" alt=""/>
                            <p>Customer #3</p>
                        </div>
                    </div>

                    <div className="mainIconDiv">
                        <div className="iconRight">
                            <TiChevronRight/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default KindWordsPreview;