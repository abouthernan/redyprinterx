import { Tel, Pbx, Facebook, Linkedin, Instagram, Whatsapp } from './Icons'
import { socialMedia } from '../constants'

export const SocialMedia = () => {
  return (
    <ul className="flex gap-1">
      <li>
        <a
          href={socialMedia.facebook}
          target="_blanck"
          title="Facebook"
          className="hidden md:block w-10 h-10 font-medium p-2 border border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href={socialMedia.instagram}
          target="_blanck"
          title="Instagram"
          className="hidden md:block w-10 h-10 font-medium p-2 border border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href={socialMedia.linkedin}
          target="_blanck"
          title="Linkedin"
          className="hidden md:block w-10 h-10 font-medium p-2.5 border border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a
          href={socialMedia.whatsapp}
          target="_blanck"
          title="Whatsapp"
          className="hidden md:block w-10 h-10 font-medium p-2 border border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Whatsapp />
        </a>
      </li>
      <li>
        <a
          href="tel:573184165736"
          title="Llámanos"
          className="hidden md:block w-10 h-10 font-medium p-3 border-2 border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Tel />
        </a>
      </li>
      <li>
        <a
          href="tel:6017364809"
          title="PBX"
          className="hidden md:block w-10 h-10 font-medium p-2 border border-slate-200 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Pbx />
        </a>
      </li>
    </ul>
  )
}

export const SocialMediaMobile = () => {
  return (
    <ul className="flex gap-1 items-center justify-center h-full">
      <li class="w-10 h-10 border border-slate-200">
        <a
          href={socialMedia.facebook}
          target="_blanck"
          title="Facebook"
          className="w-10 h-10 block font-medium p-2 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Facebook />
        </a>
      </li>
      <li class="w-10 h-10 border border-slate-200">
        <a
          href={socialMedia.instagram}
          target="_blanck"
          title="Instagram"
          className="w-10 h-10 block font-medium p-2 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Instagram />
        </a>
      </li>
      <li class="w-10 h-10 block border border-slate-200">
        <a
          href={socialMedia.linkedin}
          target="_blanck"
          title="Linkedin"
          className="w-10 h-10 block font-medium p-2.5 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Linkedin />
        </a>
      </li>
      <li class="w-10 h-10 block border border-slate-200 ">
        <a
          href={socialMedia.whatsapp}
          target="_blanck"
          title="Whatsapp"
          className="w-10 h-10 block font-medium p-2 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Whatsapp />
        </a>
      </li>
      <li class="w-10 h-10 block border-2 border-slate-200">
        <a
          href="tel:573184165736"
          title="Llámanos"
          className="w-10 h-10 block font-medium p-3 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Tel />
        </a>
      </li>
      <li class="w-10 h-10 block border border-slate-200 ">
        <a
          href="tel:6017364809"
          title="PBX"
          className="w-10 h-10 block font-medium p-2 text-cielo rounded-md hover:bg-cielo/80 hover:text-white transition-colors duration-300"
        >
          <Pbx />
        </a>
      </li>
    </ul>
  )
}
