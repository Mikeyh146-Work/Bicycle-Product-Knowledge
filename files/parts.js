/*
  Edit this file to change what the guide shows. No other file needs touching.

  Each group has:
    n      display name
    dx,dy  how far the group moves when exploded
    s      1 = show the "Safety critical" badge
    c      list of daily checks (examples: replace with your SOPs)
    p      list of parts: [name, description, part number]
           use null as the description if the spec is still missing

  DOCS are shown for every group. Set a real url to make a row a link.
  Do not put internal or sensitive links in a public repository.
*/
var BIKE = {
  docs: [
    { title: "Trek owner's manual (2019, all translations)", kind: "Manufacturer", tone: "ok", url: "" },
    { title: "Bike hire: daily pre-hire check", kind: "SOP (sample)", tone: "warn", url: "" }
  ],
  start: "front",
  groups: {
    frame: { n: "Frame", dx: 0, dy: 0, s: 0,
      c: ["Look for cracks, dents and damaged welds", "Derailleur hanger straight, ThruSkew bolt tight", "Rack and kickstand mounts secure"],
      p: [
        ["Frame", "Marlin frameset, Alpha Silver aluminium, curved top tube, internal derailleur and dropper post routing, rack and kickstand mount, 135x5mm ThruSkew"],
        ["Dérailleur hanger", "Trek hanger for the ThruSkew system", "W5260077"],
        ["Armour", "Chainstay armour, needed for rear dérailleur cable routing", "W5293689"],
        ["Cable management", "Driveside downtube cable entry plug", "W5271561"],
        ["Decal", "Trek shield headtube badge, black", "W559003"],
        ["Touch-up paint", "Gloss Blue Sage, TK630-S", "5313683"],
        ["Misc. bike part", "Kickstand mount plug and water bottle plug"],
        ["Fastener", "M5 x 16mm water bottle bolt, stainless, black"]
      ] },
    fork: { n: "Fork", dx: 40, dy: 0, s: 1,
      c: ["Compress the fork: smooth, no oil leaks", "No oil on the stanchions or the rotor", "No play when the front brake is held"],
      p: [
        ["Fork", "SR Suntour XCE 28 suspension fork, 27.5 inch, 100mm travel", "Via component manufacturer"]
      ] },
    head: { n: "Stem and headset", dx: 14, dy: -24, s: 1,
      c: ["No play in the headset (hold the brake and rock)", "Stem bolts and top cap tight", "Bars aligned with the front wheel"],
      p: [
        ["Stem", "Bontrager alloy, 31.8mm, Blendr-compatible, 7 degree, 35mm"],
        ["Head set", "Semi-integrated, 1-1/8 inch ZS type, FP-H807D4"],
        ["Headset part", "Bontrager headset top cap with star nut, black", "W545877"],
        ["Spacer", null]
      ] },
    bars: { n: "Bars and grips", dx: 42, dy: -58, s: 1,
      c: ["Grips locked on, not twisting", "Bar end plugs fitted", "Bar not bent or cracked"],
      p: [
        ["Handlebar", "Bontrager Lowriser, 31.8 x 720mm, 15mm rise, 9D bend, 4D upsweep, black"],
        ["Grips", "Trek Line Comp, nylon lock-on", "5325946"],
        ["Bar end plug", "Handlebar plug"]
      ] },
    shift: { n: "Shifter and cables", dx: 70, dy: -10, s: 0,
      c: ["Shifter clicks through all 8 gears", "Cables not frayed or kinked", "Housing seated in the frame guides"],
      p: [
        ["Shifter", "Shimano Altus SL-M315-8R, 8-speed Rapidfire Plus, optical gear display"],
        ["Cable housing set", "Bontrager shift housing, 4mm, black", "565232"],
        ["Cable housing part", "Trek foam tube to cover housing and reduce noise, 450mm"]
      ] },
    saddle: { n: "Saddle and seatpost", dx: -22, dy: -52, s: 0,
      c: ["Seat collar closed and tight", "Seatpost below the minimum insertion mark", "Saddle straight, rails not cracked"],
      p: [
        ["Saddle", "Bontrager Verse P3, steel rails", "5333090"],
        ["Seatpost", "Bontrager approved, 31.6 x 330mm, 12mm offset, black"],
        ["Seat collar", "Bontrager 36.4mm quick release, black"]
      ] },
    front: { n: "Front wheel", dx: 130, dy: 30, s: 1,
      c: ["Tyre pressure and tread", "Spokes tight, rim running true", "Skewer closed and tight, rotor straight"],
      p: [
        ["Rim", "Bontrager Connection 27.5 inch, double wall, 32 hole, 20mm inner width, Schrader, black"],
        ["Tyre", "Bontrager Montrose Comp, wire bead, 27.5 x 2.40 inch"],
        ["Tube", "27.5 x 2.0-2.4, 32mm Schrader valve", "432457"],
        ["Hub front", "Formula DC-20, 32H, 6-bolt disc, black"],
        ["Hub axle", "Front hub rebuild kit for loose-ball 6-bolt hubs"],
        ["Bearing", "3/16 inch and 1/4 inch loose ball bearings"],
        ["Skewer front", "Formula, 100mm OLD, black", "W517372"],
        ["Brake rotor", "Tektro TR160-52, 6-bolt, 160mm", "5328353 (alt)"]
      ] },
    rear: { n: "Rear wheel", dx: -95, dy: 30, s: 1,
      c: ["Tyre pressure and tread", "ThruSkew bolt tight (use the 5mm tool)", "Freehub engages, cassette not loose"],
      p: [
        ["Rim, Tyre, Tube", "Same as the front wheel"],
        ["Hub rear", "Formula DC-22, 32H, 6-bolt disc, black"],
        ["Hub body", "Freehub body, 8/9/10-speed Hyperglide, Bontrager Comp FH-204", "561948"],
        ["Hub axle", "Rear hub rebuild kit for loose-ball 6-bolt hubs", "542407"],
        ["Skewer rear", "Bolt-on ThruSkew, 173mm axle", "W5357454 (alt)"],
        ["Tool", "Trek Switch Lever tool, 5mm, black", "W5280203"],
        ["Brake rotor", "Tektro TR160-52, 6-bolt, 160mm", "5328353 (alt)"]
      ] },
    brakes: { n: "Brakes", dx: 0, dy: 95, s: 1,
      c: ["Levers firm, not touching the bar", "Pads not worn to the backing plate", "No fluid leaks at hoses or calipers"],
      p: [
        ["Brake", "Tektro HD-M276 hydraulic disc (front and rear)"],
        ["Brake (second model listed)", "Power BH-M286TF hydraulic disc, 160mm rotor"],
        ["Brake rotor", "Tektro TR160-52, 6-bolt, 160mm", "5328353 (alt)"]
      ] },
    drive: { n: "Drivetrain", dx: 0, dy: 40, s: 0,
      c: ["Chain clean, lubed and not stretched", "Cranks tight, pedals secure", "Rear dérailleur shifts cleanly through 8 gears"],
      p: [
        ["Crank", "ProWheel alloy, 30T narrow-wide steel ring, 170mm, square taper, 52mm chainline"],
        ["Bottom bracket", null],
        ["Pedal", null],
        ["Chain", null],
        ["Cassette", "Shimano Essa CS-HG300, 8-speed, 11-45T"],
        ["Rear dérailleur", "Shimano Essa U2000, 8-speed, Shadow design", "ARDU2000GS"],
        ["Fastener", "Crank arm bolts, M8 with O-ring"]
      ] }
  }
};
