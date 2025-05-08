import Button from "./Button";
import Card from "./Card";

export default function Main(props) {
    return (
          <main>
              <div className="top">
                <h1>Extensions List</h1>
                <div className="btns">
                  <Button />
                  <Button />
                  <Button />
                </div>
        
              </div>
              <div className="cards">
                <Card />
        
              </div>
            </main>
    )
}