"use client";

import { useEffect, useState } from "react";

const technologies = [
  "photon-inverted tachyon matrices",
  "polymorphic graviton stabilizers",
  "neutrino-flux capacitors",
  "harmonic quark regulators",
  "phase-shifted neutrino vortices",
  "chaotic boson entanglers",
  "tachyonic quark fusers",
  "plasma-infused charm particles",
  "dark matter zeta beams",
  "muon cloud disruptors",
  "protonic whim oscillators",
  "photon disruption matrices",
  "polychromatic particle emitters",
  "antimatter harmonic resonators",
  "photonic graviton enhancers",
  "dark energy stabilizers",
  "neutron flux regulators",
  "muon dispersion matricesx",
]

const sources = [
  "harness the waves of astral oscillation",
  "utilize the currents of cosmic reverberation",
  "tap into the vortex of starlight harmonics",
  "channel the energy of void harmonics",
  "channel the power of galactic quirk",
  "tap into the essence of the cosmic possum posse",
  "utilize the ethereal essence of aetherial harmonics",
  "tap into the quintessence of baryonic eddies",
  "channel the resonance of subatomic tumult",
  "harness the symphony of neutrino flux",
  "leverage the cadence of stellar vortices",
  "exploit the murmur of cosmic divergences",
  "employ the oscillations of temporal substrates",
  "exploit the pulsations of cosmic rhythms",
  "employ the vibrations of astral harmonics",
  "utilize the reverberations of subatomic symphonies",
  "channel the murmurs of interstellar whispers",
  "leverage the flux of galactic cadences",
]

/**
 * just an rng. feeling whimsical
 *
 * @param {*} min inclusive min
 * @param {*} max inclusive max
 */
const grabInt = (min: number=0, max: number=Number.MAX_VALUE): number => Math.floor(Math.random() * (max - min + 1) + min);

export default function Transducer() {
  const [outSrc, setOutSrc] = useState('');
  const [outTech, setOutTech] = useState('');

  const nSourcei  = sources.length - 1;        // I'm just lazy
  const nTechnoli = technologies.length - 1;   // don't read into it

  const techIndex = grabInt(0, nTechnoli);
  const tech      = technologies[techIndex];

  const sourceIndex = grabInt(0, nSourcei);
  const source      = sources[sourceIndex];
  
  useEffect(() => {
    setOutSrc(` ${source} `);
  }, []);

  useEffect(() => {
    setOutTech(` ${tech}`);
  }, [])

  return (
    <p className="antialiased">
      Using
        <span className="subpixel-antialiased text-amber-400">{ outTech }</span>
      , we
        <span className="subpixel-antialiased text-amber-400">{ outSrc }</span>
      to attempt to make matt's emails less rambling.
    </p>
  )
}