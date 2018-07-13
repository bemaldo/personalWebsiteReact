import React, {Component} from 'react';

export default class ProfileOverview extends Component{
    render(){
        return(
            <div className="profileOverviewContainer">
                
                <div className="profilePicture">
                    <img src="data:image/jpeg;base64,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" alt="golf"/>
                </div>

                <div className="contactInformation">
                    
                    <p ><img  className="iconSmall" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYCcMuQ2Arka5-YV2zzXqcc9XqRV2iXpyohLLPQ_H86pqK5yUCw" alt="Career"/>
                        Computer Engineer
                    </p>
                    <p><img  className="iconSmall" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///8wMDDCwsKGhoaWlpa8vLzFxcXAwMDPz8/Hx8ft7e3e3t64uLiQkJAvLy+enp4LCwukpKQ+Pj6tra1FRUX09PRsbGxUVFRNTU0kJCRiYmJoaGjk5OT39/d6enocHBxaWloQEBDV1dV3d3c6OjqBgYEDuthUAAAFGUlEQVR4nO3d6XqqMBAG4NDNKu4bVqtdbHv/l3ikalUgC0lmMsmZ7z+F9/kQlMIgMrzk8+JuIiajYp4jrlWgralfiEuKPtp60YRDcZsh1oqRhMuFqGaxxFk1jrBf8x0ywdlTUYT7JuAhe4yVYwi7EqAQXYS1Iwh7UqAQPfjVwwtVQAwiuLCjBArRgd4AaKG6QYwWgYW6BhFahBWaAKGJoEIzIDARUmgK1BJ7w8VndZH1xvAXCqBQf5C5RHG42U0nsqU+TL4UwQnNGyxzL/sz3ZFqsbeddjvAhG0aLCNpcapZbKTdVaGE7Ros09jio345HRFI2LbBMg0tDgwW+9bsqDDCewtgQ4u50WI/AYTtd9FjqieNQr9IGfUvaQihLbBKNKvwcNLAFtrtosfc7KjVi1fSKK/4+Be6AG+J36YLDVCFbsBr4tZ4mS9Mof1n8Jy/z6Ls+lU9M0Sha4Nlzi3KL2BVc4cndG+wTIeu0EeDZe6pCv00+EekJ/TV4JlITugT+EukJvQLLInEhL6BhyOq+fkQQ+gfKMQDJSEEsEXghf5OE0SFgRuEFwYHQgvDA4GFBICwQgpAUCEJIKSQBhBQ+ByadgqYkEiDcEIqDYIJyTQIJaTTIJCQUIMwQkoNgghpAQGExID+hdSA3oWkDjK/8Swk16BvIb0GPQsJNuhXSBLoU0gT6FFIFOhPSBXoTUgW6EtIF+hJSBjoR0gZ6EX4FBqhjAch6QZ9CGk36EFIvEF3IfUGnYXkG3QVRgB0E9LfRYWbMIYGnYRRNOgijKNBB2EkDR7yZCeMpcEyzzbCeBosI29RKowLqCDKhLEB5USJMD6glNgsjBEoIzYK4wRKiE3CWIHNJ40GYbzAxhbrwpiBTcSaMG5gA7EqjB1YJ4rUgDWiSA5YJYr0gBWiSBB4SxQpAm+IF6HJlI148lQXptRgmeeqMDXgpcWTkOKdTq7pXAttBubQT/ciNH8eNa70z0LTOTDxJT8J6zN+U8niKDQedBNhhqWwcYpxMukfhK+hNwI0r5lI9zBzTC7moTcBOHNhOBMt2hRCOVoygYyEdDhoIkndVyZ14yT5z+Hdf3AsTf98mP53mmwTehtAszl88071B/4x+/L34U/orQDMz/E3vvEk1OgyO13FWK5DbwlQ1svztbbdS+htAclqd3VFWD6dP9pMprdX9fPxLPQmec1sfB4QffXftXwwfrzJ+D30dhrmvbrhg6th+8p7hO9Cb7ph7O+CZiGVsJCF9MNCFtIPC1lIPyyEFa7eHlR5W3lYRzjhZGjyUuO+860SwYRjA94x4yiFs60xMMu2TlcYwgg/9G8mvM7uIzbhSytfGYc7s4II278afhmXUPmeMEnsb8MOIFxYAB320wBCmwodSsQXfpq9qbeavPbSX7LClRUwy2y/weELHyyF5u/OCS2cWwpt75rAFypmOChjO6cCXyh9BbUmtk99sJCFLGQhC1nIQhaykIUsZCELWchCFrKQhSxkIQtZyEIWspCFLGQhC1nIQhaykIUsZCELWchCFrKQhSxkIQtZyEIWstCX0PbxY2zhzFpoO58WW1hYC22ftMIWKh/oVApt59NiC5UPdKrfy235yCOyUP1Ap1poOZ8WWbh3EGZfEQi/1H9UI1xaDTRHFY40ww00wmxLXqgbMKITZluLR8gRhZ/aCSpaYbZs/yIaPGGhn7+hF2ZZr+2YYSzhS8/gj5oID7vqdLNuMWkYQThZb6ZmI37+AajQZlcf9H1XAAAAAElFTkSuQmCC" alt="Career"/>
                        Rhode Island, USA
                    </p>
                    <p><img  className="iconSmall" src="data:image/png;base64,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" alt="Career"/>
                        bemaldo@icloud.com
                    </p>
                    <p><img  className="iconSmall" src="data:image/png;base64,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" alt="Career"/>
                        (240) 704-4001
                    </p>
                </div>
                <div className="topBorder"></div>
                <div className="skillsSection">
                    <h5><img className="iconSmall" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwo8c8b7cUIl2CgO10ycl2_kle5-kmJOPVzMWtThuDnhFVDzlY" alt="skills"/>Skills</h5>
                    <p>Java</p>
                    <p>Python</p>
                    <p>C/C++</p>
                    <p>React, Redux</p>
                    <p>HTML, CSS, Javascript</p>
                    <p>Android Application Development</p>
                    <p>Unreal Engine 4</p>
                </div>

                <div className="certificationsSection">
                    <h5><img className="iconSmall" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyiUoYlZ1p7TAlsezt_UyGVklp-O6znglTWOBakMi48CAH8fi"/>Certifications</h5>
                    <p>Comptia A+</p>
                </div>

                <div className="languageSection">
                    <h5><img className="iconSmall" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0-mCv8hkazfUmnP_Cq1JAib26LME0sSwNcDiMSeMOVD8SrsPNQ" alt="languages"/>Languages</h5>
                    <p>English</p>
                    <p>Spanish</p>
                </div>
            </div>
        );
    }
}