'use client';

import React, { useState } from 'react';
import { IDARI_YAPI_DATA, OrgNode } from '../lib/idariYapiData'; 
import './IdariYapiTree.css'; 

const checkDefaultOpen = (node: OrgNode) => {
  if (node.id === 'baskan') return true;
  if (node.title.includes('Genel Sekreter')) return true;
  return false;
};

const TreeNode = ({ node, level = 0 }: { node: OrgNode, level?: number }) => {
  const [isOpen, setIsOpen] = useState(() => checkDefaultOpen(node));
  
  const hasChildren = node.children && node.children.length > 0;
  
  // Bu birimin altındakiler en alt şube mi?
  const isLeafGroup = hasChildren && node.children!.every(child => !child.children || child.children.length === 0);
  
  const childLayout = node.layout || 'vertical';

  // YENİ MANTIK: Hangi CSS listesinin kullanılacağına karar veriyoruz
  let listClass = 'verticalList';
  
  if (childLayout === 'horizontal') {
    listClass = 'horizontalList';
  } else if (isLeafGroup) {
    // Alt şubeler (Müdürlükler) her zaman koyu kapsül listesi olacak
    listClass = 'leafList';
  } else if (level === 1 && node.title.includes('Genel Sekreter')) {
    // Genel Sekreter'e doğrudan bağlı Başkanlıklar için yeni eklediğimiz "Beyaz Kutu Sola Yaslı" yapı
    listClass = 'leftBranchList';
  }

  const showChevron = hasChildren && node.title.includes('Başkanlığı');

  return (
    <li className={isOpen ? 'active' : ''}>
      <div 
        className="nodeContent" 
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <span>{node.title}</span>
        {showChevron && (
          <div className="iconContainer">
            <i className="chevron"></i>
          </div>
        )}
      </div>

      {isOpen && hasChildren && (
        <ul className={listClass}>
          {node.children!.map((child) => (
             <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function IdariYapiTree() {
  return (
    <div className="treeWrapper">
      <div className="treeInner">
        <ul className="orgTree">
          {IDARI_YAPI_DATA.map((node) => (
            <TreeNode key={node.id} node={node} level={0} />
          ))}
        </ul>
      </div>
    </div>
  );
}