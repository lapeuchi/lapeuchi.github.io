import fs from 'fs';

export function getCreatedDate(filePath: string): string {
  const stat = fs.statSync(filePath);
  
  const str = stat.birthtime.toISOString()

  return formatDate(str);
}

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