import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/hero.css';
import '../styles/skills.css';
import skills from '../data/skills.js';

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skillsSection">
      <div className="skillsHeader">
        <h2 className="skillsTitle">{t('skills.title')}</h2>
      </div>
      <div className="skillsGrid">
        {skills.map((skill, idx) => {
          const IconComponent = FaIcons[skill.icon];
          return (
            <div className="skillItem" key={idx}>
              {IconComponent && <IconComponent className="skillIcon" />}
              <span className="skillName">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
