export function graficasAlumnados() {
  const barData = [
    { label: "Europa", value: 40 },
    { label: "EUA", value: 27 },
    { label: "Australia", value: 1 },
    { label: "Sudamérica", value: 6 },
    { label: "Otros países", value: 35 },
  ];
  const donutData = [
    { label: "Mujeres", value: 23, color: "rgba(255,140,220,0.9)" },
    { label: "Hombres", value: 86, color: "rgba(100,220,220,0.9)" },
  ];

  const q = (sel, root = document) => root.querySelector(sel);
  const tooltip = q("#tooltip");

  function showTooltip(html, x, y) {
    tooltip.innerHTML = html;
    tooltip.style.left = x + 12 + "px";
    tooltip.style.top = y + 12 + "px";
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0) scale(1)";
    tooltip.setAttribute("aria-hidden", "false");
  }
  
  function hideTooltip() {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(-6px) scale(.96)";
    tooltip.setAttribute("aria-hidden", "true");
  }

  const grid = q("#bar-grid");

  const maxVal = Math.max(...barData.map((d) => d.value));
  const total = barData.reduce((s, d) => s + d.value, 0);
  q("#total-count").textContent = total;

  barData.forEach((d, i) => {
    const col = document.createElement("div");
    col.className = "bar";
    const barVisual = document.createElement("div");
    barVisual.className = "bar-visual";
    barVisual.style.height = "4px";
    barVisual.setAttribute("data-value", d.value);
    barVisual.setAttribute("data-label", d.label);

    const badge = document.createElement("div");
    badge.className = "value-badge";
    badge.textContent = d.value;

    const lbl = document.createElement("div");
    lbl.className = "label";
    lbl.textContent = d.label;

    col.appendChild(barVisual);
    col.appendChild(badge);
    col.appendChild(lbl);
    grid.appendChild(col);

    let hideTO;
    function enter(e) {
      const rect = e.target.getBoundingClientRect();
      showTooltip(
        `<strong>${d.label}</strong><div style="font-size:0.95rem;margin-top:4px">${d.value} alumnos</div>`,
        rect.x + rect.width / 2,
        rect.y
      );
      badge.style.opacity = "1";
      badge.style.transform = "translateY(-6px)";
      clearTimeout(hideTO);
    }
    
    function leave() {
      hideTO = setTimeout(() => {
        hideTooltip();
        badge.style.opacity = "0";
        badge.style.transform = "translateY(-10px)";
      }, 120);
    }

    barVisual.addEventListener("mouseenter", enter);
    barVisual.addEventListener("mousemove", (ev) =>
      showTooltip(
        `<strong>${d.label}</strong><div style="font-size:0.95rem;margin-top:4px">${d.value} alumnos</div>`,
        ev.clientX,
        ev.clientY
      )
    );
    barVisual.addEventListener("mouseleave", leave);

    barVisual.addEventListener("click", () => {
      document
        .querySelectorAll(".bar-visual")
        .forEach((b) => (b.style.outline = "none"));
      barVisual.style.outline = "4px solid rgba(0,140,90,0.12)";
    });
  });

  function animateBars() {
    const bars = Array.from(document.querySelectorAll(".bar-visual"));
    bars.forEach((bar, idx) => {
      const value = +bar.dataset.value;
      const pct = value / maxVal;
      const targetHeight = Math.max(10, Math.round(pct * 260)); // px

      setTimeout(() => {
        bar.style.height = targetHeight + "px";

        const badge = bar.parentElement.querySelector(".value-badge");
        badge.style.opacity = "1";
        badge.style.transform = "translateY(-8px)";
      }, 120 * idx);
    });
  }

  requestAnimationFrame(() => setTimeout(animateBars, 200)); // 1 seg = 1000 ticks

  // Donut o si que rico ajjaja
  const svg = q("#donut");
  const g =
    svg.querySelector("g") ||
    svg.appendChild(
      document.createElementNS("http://www.w3.org/2000/svg", "g")
    );
  g.setAttribute("transform", "translate(120,120)");

  const radiusOuter = 90;
  const radiusInner = 50;

  function polarToCartesian(cx, cy, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + radius * Math.cos(angleInRadians),
      y: cy + radius * Math.sin(angleInRadians),
    };
  }
  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
    return d;
  }

  const donutTotal = donutData.reduce((s, d) => s + d.value, 0);

  let startAngle = 0;
  donutData.forEach((slice, i) => {
    const sliceAngle = (slice.value / donutTotal) * 360;
    const endAngle = startAngle + sliceAngle;

    const arcGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const d = describeArc(0, 0, radiusOuter, startAngle, endAngle);
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", slice.color);
    path.setAttribute("stroke-width", radiusOuter - radiusInner);
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("filter", "url(#softShadow)");
    path.setAttribute(
      "data-perc",
      ((slice.value / donutTotal) * 100).toFixed(1)
    );
    path.style.opacity = "0.98";
    arcGroup.appendChild(path);

    const hit = document.createElementNS("http://www.w3.org/2000/svg", "path");
    hit.setAttribute("d", d);
    hit.setAttribute("fill", "none");
    hit.setAttribute("stroke", "transparent");
    hit.setAttribute("stroke-width", radiusOuter - radiusInner + 10);
    hit.style.cursor = "pointer";
    arcGroup.appendChild(hit);

    hit.addEventListener("mouseenter", (ev) => {
      const pct = ((slice.value / donutTotal) * 100).toFixed(1);
      showTooltip(
        `<strong>${slice.label}</strong><div style="margin-top:6px">${slice.value} (${pct}%)</div>`,
        ev.clientX,
        ev.clientY
      );
      hit.style.opacity = "0.85";
    });
    hit.addEventListener("mousemove", (ev) =>
      showTooltip(
        `<strong>${slice.label}</strong><div style="margin-top:6px">${
          slice.value
        } (${((slice.value / donutTotal) * 100).toFixed(1)}%)</div>`,
        ev.clientX,
        ev.clientY
      )
    );
    hit.addEventListener("mouseleave", hideTooltip);

    g.appendChild(arcGroup);
    startAngle = endAngle;
  });

  (function animateDonut() {
    const paths = Array.from(svg.querySelectorAll("path")).filter(
      (p) => p.getAttribute("stroke") !== "transparent"
    );
    paths.forEach((p, idx) => {
      const len = p.getTotalLength
        ? p.getTotalLength()
        : 2 * Math.PI * radiusOuter * (p.getAttribute("data-perc") / 100);
      p.style.strokeDasharray = len + " " + len;
      p.style.strokeDashoffset = len;
      p.style.transition =
        "stroke-dashoffset 700ms cubic-bezier(.2,.9,.3,1) " + idx * 120 + "ms";
      requestAnimationFrame(() => (p.style.strokeDashoffset = "0"));
    });

    const hole = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    hole.setAttribute("r", radiusInner);
    hole.setAttribute("fill", "#fff");
    hole.setAttribute("cx", 0);
    hole.setAttribute("cy", 0);
    hole.style.transition = "r 500ms cubic-bezier(.2,.9,.3,1)";
    g.appendChild(hole);

    const centerText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    centerText.setAttribute("x", 0);
    centerText.setAttribute("y", 6);
    centerText.setAttribute("text-anchor", "middle");
    centerText.setAttribute("font-size", "18");
    centerText.setAttribute("font-weight", "700");
    centerText.setAttribute("fill", "#24323a");
    centerText.textContent = donutTotal + " total";
    centerText.style.opacity = "0";
    centerText.style.transition = "opacity 400ms 500ms";
    g.appendChild(centerText);

    requestAnimationFrame(() => {
      hole.setAttribute("r", radiusInner);
      centerText.style.opacity = "1";
    });
  })();

  const liveTotal = document.createElement("div");
  liveTotal.setAttribute("aria-live", "polite");
  liveTotal.style.position = "absolute";
  liveTotal.style.left = "-9999px";
  liveTotal.textContent = `Total de alumnos: ${total}. Mujeres ${donutData[0].value}, Hombres ${donutData[1].value}.`;
  document.body.appendChild(liveTotal);

  window.addEventListener("scroll", hideTooltip);
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".bar") && !e.target.closest("#donut")) hideTooltip();
  });
}
