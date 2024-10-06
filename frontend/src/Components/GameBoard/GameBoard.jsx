const LudoGameBoard = () => {
  return (
    <div className="container card">
      {/* First row */}
      <div className="container-row1 clearfix">
        <div className="row1-col1 green">
          <div className="row1-col1-child clearfix white">
            <div className="green"></div>
            <div className="green"></div>
            <div className="green"></div>
            <div className="green"></div>
          </div>
        </div>
        <div className="row1-col2 clearfix">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="yellow"></div>
          <div className="yellow"></div>
          <div></div>
          <div className="yellow"></div>
          <div></div>
          <div></div>
          <div className="yellow"></div>
          <div></div>
          <div></div>
          <div className="yellow"></div>
          <div></div>
          <div></div>
          <div className="yellow"></div>
          <div></div>
        </div>
        <div className="row1-col3 yellow">
          <div className="row1-col3-child clearfix white">
            <div className="yellow"></div>
            <div className="yellow"></div>
            <div className="yellow"></div>
            <div className="yellow"></div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="container-row2 clearfix">
        <div className="row2-col1 clearfix">
          <div></div>
          <div className="green"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="green"></div>
          <div className="green"></div>
          <div className="green"></div>
          <div className="green"></div>
          <div className="green"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row2-col2">
          {/* add triangular effect using html and css */}
          <div className="contain-triangles">
            <div className="triangle-right"></div>
            <div className="triangle-up"></div>
            <div className="triangle-left"></div>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div className="row2-col3 clearfix">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="blue"></div>
          <div></div>
        </div>
      </div>

      {/* Third row */}
      <div className="container-row3 clearfix">
        <div className="row3-col1 red">
          <div className="row3-col1-child clearfix white">
            <div className="red"></div>
            <div className="red"></div>
            <div className="red"></div>
            <div className="red"></div>
          </div>
        </div>
        <div className="row3-col2 clearfix">
          <div></div>
          <div className="red"></div>
          <div></div>
          <div></div>
          <div className="red"></div>
          <div></div>
          <div></div>
          <div className="red"></div>
          <div></div>
          <div></div>
          <div className="red"></div>
          <div></div>
          <div className="red"></div>
          <div className="red"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row3-col3 blue">
          <div className="row3-col3-child clearfix white">
            <div className="blue"></div>
            <div className="blue"></div>
            <div className="blue"></div>
            <div className="blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LudoGameBoard;
