(function () {
  var G = BIKE.groups;
  var keys = Object.keys(G);
  var slider = document.getElementById("explode");
  var chipBox = document.getElementById("chips");
  var panel = document.getElementById("panel");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function badge(text, tone) {
    return el("span", "badge" + (tone ? " badge-" + tone : ""), text);
  }

  function setExplode(t) {
    keys.forEach(function (k) {
      var g = document.getElementById("p-" + k);
      g.style.transform = "translate(" + (G[k].dx * t) / 100 + "px," + (G[k].dy * t) / 100 + "px)";
      g.querySelector(".lbl").style.opacity = Math.min(1, Math.max(0, (t - 20) / 30));
    });
    slider.value = t;
  }

  function renderPanel(k) {
    var g = G[k];
    panel.textContent = "";

    var title = el("div", "title-row");
    title.appendChild(el("h2", "", g.n));
    if (g.s) title.appendChild(badge("Safety critical", "warn"));
    title.appendChild(badge(g.p.length + (g.p.length === 1 ? " part" : " parts")));
    panel.appendChild(title);
    panel.appendChild(el("p", "sub", "Trek Marlin 4 Gen 3"));

    g.p.forEach(function (part) {
      var row = el("div", "row");
      row.appendChild(el("span", "name", part[0]));
      var desc = el("span", "desc");
      if (part[1]) {
        desc.textContent = part[1];
      } else {
        desc.appendChild(badge("Needs spec", "bad"));
        desc.appendChild(document.createTextNode(" No description in the parts list"));
      }
      if (part[2]) desc.appendChild(el("span", "pn", part[2]));
      row.appendChild(desc);
      panel.appendChild(row);
    });

    var cols = el("div", "cols");
    var checks = el("div");
    checks.appendChild(el("h3", "", "Example daily checks"));
    g.c.forEach(function (c) { checks.appendChild(el("div", "check", c)); });
    var docs = el("div");
    docs.appendChild(el("h3", "", "Documents"));
    BIKE.docs.forEach(function (d) {
      var row = d.url ? el("a", "doc") : el("div", "doc");
      if (d.url) { row.href = d.url; row.target = "_blank"; row.rel = "noopener"; }
      row.appendChild(el("span", "t", d.title));
      row.appendChild(badge(d.kind, d.tone));
      docs.appendChild(row);
    });
    cols.appendChild(checks);
    cols.appendChild(docs);
    panel.appendChild(cols);
  }

  function select(k) {
    keys.forEach(function (j) {
      document.getElementById("p-" + j).classList.toggle("sel", j === k);
      document.getElementById("c-" + j).classList.toggle("sel", j === k);
    });
    renderPanel(k);
  }

  keys.forEach(function (k) {
    var chip = el("button", "chip", G[k].n);
    chip.id = "c-" + k;
    chip.type = "button";
    chip.addEventListener("click", function () { select(k); });
    chipBox.appendChild(chip);

    var g = document.getElementById("p-" + k);
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", G[k].n);
    g.addEventListener("click", function () { select(k); });
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(k); }
    });
  });

  slider.addEventListener("input", function () { setExplode(+slider.value); });

  select(BIKE.start);
  setExplode(0);

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    setExplode(70);
  } else {
    var t0 = null;
    var step = function (ts) {
      if (t0 === null) t0 = ts;
      var f = Math.min(1, (ts - t0) / 1000);
      setExplode(Math.round(70 * (1 - Math.pow(1 - f, 3))));
      if (f < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
})();
