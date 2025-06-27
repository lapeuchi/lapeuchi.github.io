import fs from 'fs';
import path from 'path';


export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  
  if (isNaN(d.getTime())) 
    return 'Invalid Date';

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

export function getCreatedDate(entryPath: string): string {
  const fullPath = path.join(process.cwd(), entryPath); // ✅ 중복 제거
  const stats = fs.statSync(fullPath);

  return formatDate(stats.birthtime.toISOString());
}