import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  
  constructor(){}

  ngOnInit(){
    // Criando um intervalo para simular mudanças de status do servidor
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999999999

      if(rnd < 0.5){
        this.currentStatus = 'online';
      }else if(rnd < 0.9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(){
    console.log('After View Init');
  }

  ngOnDestroy(){
    clearTimeout(this.interval);
  }
}
