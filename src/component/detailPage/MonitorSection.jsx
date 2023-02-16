import React from "react";

function MonitorSection(state) {
  return (
    <div className="monitorSection wow fadeIn">
      <div className="monitorImg">
        <div className="monitorOuter">
          <img src="../../image/detail/bench_img.png" alt="monitor_bg" />
          <div className="monitor_inner">
            <img src={state.innerImg} alt="monitor_inner_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorSection;
